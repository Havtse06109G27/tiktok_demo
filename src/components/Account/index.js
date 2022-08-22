import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/4cf0dd9ecdb19a7048daf57ead3ca5c0~c5_100x100.jpeg?x-expires=1660978800&x-signature=oAMErTVc25WwZD9JAuY%2FRmPv%2BTA%3D"
                alt="Châu"
            />
            <div className={cx('info')}>
                <h4 className={cx('username')}>
                    <span>h_chaukiuu</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('name')}>Trần Huyền Châu</span>
            </div>
        </div>
    );
}

export default AccountItem;
