import { ChangeEventHandler } from 'react';
import { Button, Input } from '../../components';
import { ICharacterSheet } from '../types';
import { FormActionTypes, exportHandler, ImportAction } from '../utils';
import style from "../DungeonsAndDragons.module.scss";
import buttonStyle from "../../components/Button/Button.module.scss";

interface IProps {
  data: ICharacterSheet;
  dispatch: React.Dispatch<ImportAction>;
}

function ImportAndExport({ data, dispatch }: IProps) {
  const importHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    const fileReader = new FileReader();
    if (!e.target?.files) return;

    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = e => {
      if (typeof e.target?.result !== 'string') return;

      dispatch({ type: FormActionTypes.ImportJSON, value: JSON.parse(e.target.result) });
    };
  }

  return (
    <div className={style.buttons_group}>
      <Button
        type="button"
        circle
        title="Download Character Sheet"
        onClick={() => exportHandler(data)}
      >
        ⭳
      </Button>

      <br />

      <label title="Upload Character Sheet" className={buttonStyle.button + ' button ' + buttonStyle.circle}>
        ⭱
        <Input
          onChange={importHandler}
          type="file"
          accept=".json,application/json"
          hidden
        />
      </label>
    </div>
  );
}

export default ImportAndExport;
