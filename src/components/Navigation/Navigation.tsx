import { COMPONENTS_TABS, TComponentTab } from '../../App';
import style from "./Navigation.module.scss";

interface IProps extends React.ComponentProps<"input"> {
  activeTab: TComponentTab;
  setActiveTab: (tab: TComponentTab) => void;
}

function Navigation({ activeTab, setActiveTab }: IProps) {
  return (
    <nav className={style.navigation}>
      <ul>
        {COMPONENTS_TABS.map(tab =>
          <li
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={tab === activeTab ? style.active : ''}
          >
            {tab}
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
