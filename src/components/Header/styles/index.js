import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    height: 80px;
    background-color: ${({ theme }) => theme.colors.dark};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    @media (max-width: 1024px) {
        position: relative;
        padding: 0 20px;
    }

    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateX(-50%);
        }

        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes slideDown {
        from {
            transform: scaleY(0);
            opacity: 0;
        }

        to {
            transform: scaleY(1);
            opacity: 1;
        }
    }

    .logo{
        width: 50px;
        height: 50px;
        transition: all 0.3s ease;
        cursor: pointer;

        &:hover{
            transform: scale(1.1);
        }
    }

    .header-menu-list{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin: 0;
        padding: 0;

        .item{
            font-size: ${({ theme }) => theme.fontSizes.sm};
            font-family: ${({ theme }) => theme.fonts.medium};
            font-weight: 600;

            a{
                color: ${({ theme }) => theme.colors.main};
                text-decoration: none;
                cursor: pointer;
                transition: all .2s ease;
            }

            &:hover > a,
            &.active > a{
                color: ${({ theme }) => theme.colors.white};
            }

            .submenu-saiba-mais{
                display: none;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                position: absolute;
                top: calc(100% + 29px);
                left: -37.5%;
                width: 175%;
                padding: 0;
                background-color: ${({ theme }) => theme.colors.transparent};
                z-index: 1;

                .item{
                    width: 100%;
                    text-align: center;
                    padding: 10px;
                    border-bottom: 1px solid ${({ theme }) => theme.colors.dark};
                    background-color: ${({ theme }) => theme.colors.mediumDark};
                    opacity: 0;
                    z-index: -1px;
                }

                &.active {
                    display: flex;

                    .item:nth-child(1){
                        animation: slideIn .4s ease forwards .1s;
                    }

                    .item:nth-child(2){
                        animation: slideIn .4s ease forwards .26s;
                    }

                    .item:nth-child(3){
                        animation: slideIn .4s ease forwards .38s;
                    }

                    .item:nth-child(4){
                        animation: slideIn .4s ease forwards .5s;
                    }

                    .item:nth-child(5){
                        animation: slideIn .4s ease forwards .62s;
                    }
                }
            }
        }

        & > .item:last-child{
            background-color: ${({ theme }) => theme.colors.main};
            color: ${({ theme }) => theme.colors.white};
            padding: 10px 20px;
            border: 2px solid ${({ theme }) => theme.colors.main};
            transition: all .2s ease;
            cursor: pointer;

            a{
                color: ${({ theme }) => theme.colors.white};
            }

            &:last-child:hover{
                background-color: ${({ theme }) => theme.colors.white};
            }

            &:last-child:hover a{
                color: ${({ theme }) => theme.colors.main};
            }
        }

        &.mobile{
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            display: none;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            background-color: ${({ theme }) => theme.colors.dark};
            padding: 10px 0;
            transform-origin: left top;
            transform: scaleY(0);
            opacity: 0;
            z-index: 2;

            &.active{
                display: flex;
                animation: slideDown .6s ease forwards;
            }

            .item{
                width: 100%;
                margin: 0 !important;
                border-bottom: 1px solid ${({ theme }) => theme.colors.mediumDark};
                padding: 10px 20px;

                .submenu-saiba-mais{
                    left: 0;
                    width: 100%;
                    top: calc(100% + 10px);
                    position: relative;
                }
            }

            & > .item:first-child{
                border-top: 1px solid ${({ theme }) => theme.colors.mediumDark};
            }

            & > .item:last-child{
                width: auto;
                border: 2px solid ${({ theme }) => theme.colors.main};
                margin: 10px auto !important;
            }
        }
    }

    .btn-menu{
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        background-color: transparent !important;

        & > span{
            font-size: "14px";
            font-family: ${({ theme }) => theme.fonts.light};
            color: ${({ theme }) => theme.colors.white};
        }

        & > .burguer{
            width: 20px;
            height: 2px;
            background-color: ${({ theme }) => theme.colors.white};
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(255, 255, 255, 0.2);
            margin: 0 10px;
            transition: all .2s ease;
            position: relative;

            &::before,
            &::after{
                content: "";
                width: 20px;
                height: 2px;
                background-color: ${({ theme }) => theme.colors.white};
                border-radius: 5px;
                box-shadow: 0 2px 5px rgba(255, 255, 255, 0.2);
                position: absolute;
                left: 0;
                transition: all .2s ease;
            }

            &::before{
                top: -6px;
            }

            &::after{
                bottom: -6px;
            }
        }

        &.active{
            background-color: ${({ theme }) => theme.colors.transparent};

            & > span{
                color: ${({ theme }) => theme.colors.main};
            }

            & > .burguer{
                transform: translateX(30px);
                background-color: ${({ theme }) => theme.colors.transparent};
                box-shadow: none;

                &::before,
                &::after{
                    background-color: ${({ theme }) => theme.colors.main};
                    box-shadow: 0 2px 5px rgba(250, 166, 25, .2);
                }

                &::before{
                    transform: rotate(45deg) translate(-17px, 25px);
                }

                &::after{
                    transform: rotate(-45deg) translate(-17px, -26px);
                }
            }
        }
    }
`;