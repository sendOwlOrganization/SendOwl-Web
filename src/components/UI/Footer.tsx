import {List, ListItemButton, styled, useTheme} from "@mui/material";
import css from "@emotion/css";
import Link from "next/link";

const ListCss = styled('div')(({theme}) => css`
  font-size: 12px;
  font-weight: 600;
  padding: 0 8px 0 8px;
  line-height: 18px;
  color: ${theme.palette.gray[600]};
  border-right: 1px ${theme.palette.gray[400]} solid;
`)

const FotterTitleCss = styled('span')(({theme}) => css`
  font-size: 12px;
  font-weight: 600;
  
  padding: 0 8px 0 8px;
  color: ${theme.palette.gray[600]};
`)

const FooterContentCss = styled('span')(({theme}) => css`
  color: ${theme.palette.gray[500]};
  font-weight: 300;
  font-size: 12px;
  padding: 0 8px 0 8px;
`)

/** Fixme: how to page description */
const corporationList = [
    {name: '로그인', href: '/login'},
    {name: 'PC버전', href: '/?'},
    {name: '서비스 소개', href: '/?'},
    {name: '광고 문의', href: '/?'},
    {name: '고객 센터', href: '/?'},
]

const Footer = () => {
    const theme = useTheme();

    return (
        <>
            <List sx={{display: 'flex', padding: '16px 0 38px 8px'}}>
                {corporationList.map(({name, href}, index) => (
                    <Link href={href} key={index}>
                        <ListCss>{name}</ListCss>
                    </Link>
                ))}
            </List>
            <List sx={{display: 'grid', padding: '0 0 8px 8px'}}>
                <ListCss sx={{paddingBottom: '8px'}}>(주)MBTI Lab</ListCss>
                <FotterTitleCss>
                    개인정보보호책임자
                    <FooterContentCss>김재환</FooterContentCss>
                </FotterTitleCss>
                <FotterTitleCss>
                    사업자 번호
                    <FooterContentCss>000-00-00000</FooterContentCss>
                </FotterTitleCss>
                <FotterTitleCss>
                    주소
                    <FooterContentCss>서울특별시 마조로</FooterContentCss>
                </FotterTitleCss>
                <FotterTitleCss>
                    고객 문의
                    <FooterContentCss>카카오 플러스 친구에 'MBTI Lab'을 검색하세요 </FooterContentCss>
                </FotterTitleCss>
                <FooterContentCss sx={{padding: '8px'}}>ⓒ 2022 MBTI Lab. ALL RIGHTS RESERVED.</FooterContentCss>
            </List>
        </>
    )
}

export default Footer;