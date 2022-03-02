import moduleStyle from "../../styles/Home.module.scss";

export default function DetailsBox({ children }) {
  return (
    <div className={moduleStyle.MainContainer__details__contentWrapperParent}>
      <div className={moduleStyle.MainContainer__details__contentWrapper}>
        {children}
      </div>
    </div>
  );
}
