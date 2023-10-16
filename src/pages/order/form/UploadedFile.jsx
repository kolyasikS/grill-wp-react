import React from 'react';
import styles from '../styles/uploadedFile.module.scss'
const UploadedFile = ({src, name, size, progress, remove}) => {
    console.log(size);
    function formatBytes(bytes, decimals = 2) {
        const k = 1024
        // const sizes = ['Bytes', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB']
        return `${parseFloat((bytes / Math.pow(k, 2)).toFixed(decimals))} MB`;
    }

    return (
        <div className={styles.file}>
            <div className={styles.file__image}>
                <img src={src} alt=""/>
            </div>
            <div className={styles.file__info}>
                <div className={'flex w-full justify-between'}>
                    <p>{name}</p>
                    <p>{formatBytes(size)}</p>
                </div>
                <div className={styles.file__progress}>
                    <div className={styles.file__progress_done} style={{
                        width: `${progress}%`
                    }}>

                    </div>
                </div>
            </div>
            <button className={styles.file__remove_btn} onClick={remove}></button>
        </div>
    );
};

export default UploadedFile;