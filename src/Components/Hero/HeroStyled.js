import styled from "styled-components";

export const HeroStyled = styled.section`
  position: relative;
  padding-top: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  height: 100%;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.mind}) {
  }
  @media (max-width: ${({ theme }) => theme.desktop}) {
    padding-top: 5rem;
  }
  .hero {
    height: 100%;
    width: 100%;
    display: flex;
    @media (max-width: ${({ theme }) => theme.desktop}) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    &-left {
      width: 100%;
      position: relative;
      flex: 2;
      text-align: left;
      padding-top: 8.5rem;
      /* i will use 4.5 before the breakpoint */
      /* @media (max-width: ${({ theme }) => theme.mind}) {
        flex: 3;
      } */
      @media (max-width: ${({ theme }) => theme.dont}) {
        /* padding-top: 6rem; */
      }
      @media (max-width: ${({ theme }) => theme.desktop}) {
        padding-top: 0;
        margin-top: 2rem;
      }
      h1 {
        max-width: 500px;
        font-size: 4rem;
        /* color: transparent; */
        @media (max-width: ${({ theme }) => theme.text}) {
          font-size: 3.5rem;
        }
        @media (max-width: ${({ theme }) => theme.desktop}) {
          font-size: 3rem;
        }
        @media (max-width: ${({ theme }) => theme.make}) {
          font-size: 2.5rem;
          max-width: 400px;
        }
        @media (max-width: ${({ theme }) => theme.max}) {
          font-size: 2rem;
          max-width: 400px;
        }

        background: conic-gradient(
          #d9d7f1 12%,
          #baabda 12%,
          #baabda 33%,
          #e7fbbe 33%,
          #e7fbbe 55%,
          #ffcbcb 55%,
          #ffcbcb 70%,
          #b5deff 70%,
          #b5deff 87%,
          #f7d1ba 87%
        );
        background-size: 50%;
        background-clip: text;
        -webkit-background-clip: text;
        animation: expand-rev 0.5s ease forwards;
        cursor: pointer;
        &:hover {
          animation: expand 0.5s ease forwards;
        }
      }
      p {
        max-width: 400px;
      }
    }
    &-right {
      position: relative;
      flex: 2;
      width: 100%;

      @media (max-width: ${({ theme }) => theme.desktop}) {
        width: 50%;
      }
      .box {
        position: absolute;
        &-1 {
          top: 50%;
          background-repeat: no-repeat;
          height: 400px;
          width: 250px;
          top: 150px;
          left: 10%;
          @media (max-width: ${({ theme }) => theme.mins}) {
          }
          @media (max-width: ${({ theme }) => theme.mind}) {
            height: 300px;
            width: 200px;
            top: 190px;
            left: 15%;
          }
          @media (max-width: ${({ theme }) => theme.dont}) {
            width: 180px;
            height: 290px;
            left: 10%;
          }
          @media (max-width: ${({ theme }) => theme.text}) {
            left: 5%;
            width: 170px;
            height: 280px;
          }
          @media (max-width: ${({ theme }) => theme.desktop}) {
            left: 0%;

            width: 170px;
            height: 280px;
            top: 100px;
          }
          @media (max-width: ${({ theme }) => theme.images}) {
            width: 150px;
            height: 260px;
          }
          @media (max-width: ${({ theme }) => theme.make}) {
            left: -50px;
          }

          @media (max-width: ${({ theme }) => theme.max}) {
            width: 130px;
            height: 210px;
          }
          @media (max-width: ${({ theme }) => theme.foot}) {
            width: 110px;
            height: 200px;
          }
        }
        &-2 {
          background-size: cover;
          height: 240px;
          width: 200px;
          left: 50%;
          top: 74px;
          @media (max-width: ${({ theme }) => theme.mins}) {
            width: 180px;
            left: 330px;
          }
          @media (max-width: ${({ theme }) => theme.mind}) {
            width: 170px;
            height: 200px;
            left: 60%;
            top: 125px;
          }
          @media (max-width: ${({ theme }) => theme.dont}) {
            width: 140px;
            height: 180px;
            left: 245px;
            top: 145px;
          }
          @media (max-width: ${({ theme }) => theme.text}) {
            left: 57%;
            width: 120px;
            height: 170px;
          }

          @media (max-width: ${({ theme }) => theme.desktop}) {
            left: 190px;

            top: 50px;
          }
          @media (max-width: ${({ theme }) => theme.images}) {
            left: 170px;
            width: 110px;
            height: 170px;
          }
          @media (max-width: ${({ theme }) => theme.make}) {
            left: 120px;
          }
          @media (max-width: ${({ theme }) => theme.max}) {
            left: 100px;
            width: 100px;
            height: 130px;
          }
          @media (max-width: ${({ theme }) => theme.foot}) {
            left: 73px;
            width: 100px;
            height: 135px;
          }
        }
        &-3 {
          top: 340px;
          width: 240px;
          height: 200px;
          position: absolute;
          height: 280px;
          width: 200px;
          left: 50%;

          @media (max-width: ${({ theme }) => theme.mins}) {
            width: 180px;
            left: 330px;
          }
          @media (max-width: ${({ theme }) => theme.mind}) {
            width: 170px;
            height: 210px;
            left: 60%;
            top: 350px;
          }

          @media (max-width: ${({ theme }) => theme.dont}) {
            width: 140px;
            height: 180px;
            left: 245px;
            top: 348px;
          }

          @media (max-width: ${({ theme }) => theme.text}) {
            top: 335px;
            left: 57%;
            width: 120px;
            height: 170px;
          }
          @media (max-width: ${({ theme }) => theme.desktop}) {
            left: 190px;

            top: 240px;
          }
          @media (max-width: ${({ theme }) => theme.desk}) {
          }
          @media (max-width: ${({ theme }) => theme.images}) {
            left: 170px;
            width: 110px;
            height: 170px;
          }
          @media (max-width: ${({ theme }) => theme.make}) {
            left: 120px;
          }
          @media (max-width: ${({ theme }) => theme.max}) {
            width: 100px;
            height: 145px;
            top: 200px;
            left: 100px;
          }
          @media (max-width: ${({ theme }) => theme.foot}) {
            left: 73px;
            width: 100px;
            height: 135px;
          }
        }
      }
    }
  }
  @keyframes expand {
    0% {
      background-size: 50%;
      background-position: 0 0;
    }
    20% {
      background-size: 55%;
      background-position: 0 1em;
    }
    100% {
      background-size: 325%;
      background-position: -10em -4em;
    }
  }

  @keyframes expand-rev {
    0% {
      background-size: 325%;
      background-position: -10em -4em;
    }
    20% {
      background-size: 55%;
      background-position: 0 1em;
    }
    100% {
      background-size: 50%;
      background-position: 0 0;
    }
  }
`;