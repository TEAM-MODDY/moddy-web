import styled from 'styled-components';

const Loading = () => {
  return (
    <S.LoadingLayout>
      <S.Loader className="loader" />;
    </S.LoadingLayout>
  );
};

export default Loading;

const S = {
  LoadingLayout: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100dvh;
  `,
  Loader: styled.div`
    &.loader {
      width: 50px;
      aspect-ratio: 1;

      border-radius: 25px;

      background:
        radial-gradient(farthest-side, #236fff 94%, #0000) top/8px 8px no-repeat,
        conic-gradient(#0000 30%, #236fff);
      mask: radial-gradient(farthest-side, #0000 calc(100% - 8px), #000 0);

      animation: l13 1s infinite linear;
    }

    @keyframes l13 {
      100% {
        transform: rotate(1turn);
      }
    }
  `,
};
