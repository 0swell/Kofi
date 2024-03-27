import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { GroupIcon } from './GroupIcon';
import classes from './IPhone13141.module.css';
import { VectorIcon } from './VectorIcon';

interface Props {
  className?: string;
}
/* @figmaId 150:2103 */
export const IPhone13141: FC<Props> = memo(function IPhone13141(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.hosgeldinLutfenSifreniYaz}>
        <div className={classes.textBlock}>Hoşgeldin!</div>
        <div className={classes.textBlock2}>Lütfen şifreni yaz</div>
      </div>
      <div className={classes.girisYapabilmekIcinMevcutHesab}>
        Giriş yapabilmek için mevcut hesabınızın şifresini yazınız.
      </div>
      <div className={classes.sifremiUnuttum}>Şifremi unuttum.</div>
      <div className={classes.rectangle14}></div>
      <div className={classes.girisYap}>Giriş yap</div>
      <div className={classes.group}>
        <GroupIcon className={classes.icon} />
      </div>
      <div className={classes.kOFI}>KOFİ</div>
      <div className={classes.vector}>
        <VectorIcon className={classes.icon2} />
      </div>
      <div className={classes.rectangle13}></div>
      <div className={classes.unnamed}>
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .{' '}
      </div>
    </div>
  );
});
