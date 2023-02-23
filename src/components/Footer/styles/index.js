import styled from "styled-components";

export const FooterContainer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.dark};

    .logo{
        width: 200px;
    }

    .footer-infos-wrapper{
        *{
            color: ${({ theme }) => theme.colors.lightDark};
            text-decoration: none;
            line-height: normal;
        }

        div{
            margin: 0;

            &.footer-infos-title,
            &.footer-infos-title a,
            &.footer-infos-title a:hover,
            &.footer-infos-title a:active,
            &.footer-infos-title span{
                font-family: ${({ theme }) => theme.fonts.heavy};
                font-size: ${({ theme }) => theme.fontSizes.md};
            }
        }

        .social-list-footer{
            display: flex;
            align-items: center;
            justify-content: flex-start;
            margin-left: 10px;
            padding: 0;

            .social-item{
                margin-right: 5px;
                cursor: pointer;
                transition: all .2s ease;

                &:hover{
                    transform: scale(1.1);
                    color: ${({ theme }) => theme.colors.main};
                }
            }
                                    
        }

        .footer-infos-text{
            font-family: ${({ theme }) => theme.fonts.medium};

            *{
                font-family: ${({ theme }) => theme.fonts.heavy};
            }

            @media (max-width: 1240px){
                font-size: 14px;

                *{
                    font-size: 14px;
                }
            }
        }
    }
`;