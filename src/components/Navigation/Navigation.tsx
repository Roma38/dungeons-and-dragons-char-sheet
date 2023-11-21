import { COMPONENTS_TABS } from '../../App';
import style from "./Navigation.module.scss";

interface IProps extends React.ComponentProps<"input"> {
  activeTab: typeof COMPONENTS_TABS[number];
  setActiveTab: (tab: typeof COMPONENTS_TABS[number]) => void;
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
