import React, {useRef, useState} from 'react';
import styles from '../styles/form.module.scss';
import Divider from "./Divider";
import contactDetailsIcon from '@assets/images/orderPage/man.png';
import tellUsIcon from '@assets/images/orderPage/grill.png';
import scheduleIcon from '@assets/images/orderPage/schedule.png';
import {ClassicInput, ClassicTextArea} from "@shared/inputs/api";
import zipCodeIcon from '@assets/images/orderPage/zip-code.png';
import uploadIcon from '@assets/images/orderPage/uplaod-icon.png';
import calendarIcon from '@assets/images/orderPage/calendar-icon.png';

import Select from "./Select";
import UploadedFile from "./UploadedFile";

import testIcon from '@assets/images/orderPage/orderBg.png';
import {LightRedCBtn} from "@shared/buttons/api";
import {EmailInfoItem, PhoneInfoItem} from "../../home/api";
const Form = () => {
    const [preferredContact, setPreferredContact] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const filesInputRef = useRef();
    const [files, setFiles] = useState([]);
    const onBrowseFiles = () => {
        filesInputRef.current.click();
    }

    const isValidExtension = (ext) => {
        let isValid = false;

        switch (ext) {
            case 'jpg':
            case 'png':
            case 'gif':
                isValid = true;
                break;
            default:
                break;
        }

        return isValid;
    }

    const updateFilesList = (selectedFiles) => {
        for (let i = 0; i < selectedFiles.length; i++) {
            const [type, extension] = selectedFiles[i].type.split('/');
            if (type !== 'image' || !isValidExtension(extension)) {
                continue;
            }
            if (!files.some(file => file.name === selectedFiles[i].name)) {
                setFiles(prevFiles => [...prevFiles, {
                    name: selectedFiles[i].name,
                    url: URL.createObjectURL(selectedFiles[i]),
                    size: selectedFiles[i].size,
                }]);
            }
        }
    }

    const onFilesSelected = (e) => {
        const selectedFiles = e.target.files;
        if (selectedFiles.length === 0) {
            return;
        }
        updateFilesList(selectedFiles);
    }

    const onDragOver = (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'copy';
    }

    const onDragStart = (e) => {
        e.preventDefault();
        setIsDragging(true);
    }
    const onDragLeave = (e) => {
        e.preventDefault();
        setIsDragging(false);
    }
    const onDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        const files = e.dataTransfer.files;
        updateFilesList(files);
    }

    const removeFile = (filename) => {
        setFiles(prevState => prevState.filter(file => file.name !== filename));

    }
    return (
        <form className={styles.form}>
            <div className={styles.form__inner}>
                <h2 className={styles.form__title}>Fill out this form</h2>
                <h3 className={styles.form__subtitle}>and we will reach out to you shortly</h3>
                <Divider text={'Your Contact Details'} img={contactDetailsIcon}/>
                <div className={styles.form__block}>
                    <div className={styles.form__contacts_block}>
                        <div className={styles.form__input_wrapper}>
                            <img className={styles.form__input_icon} src={zipCodeIcon} alt="" width={24} height={24}/>
                            <ClassicInput>Name</ClassicInput>
                        </div>
                        <div className={styles.form__inputs_block}>
                            <div className={styles.form__input_wrapper}>
                                <img className={styles.form__input_icon} src={zipCodeIcon} alt="" width={24} height={24}/>
                                <ClassicInput>Phone</ClassicInput>
                            </div>
                            <div className={styles.form__input_wrapper}>
                                <img className={styles.form__input_icon} src={zipCodeIcon} alt="" width={24} height={24}/>
                                <ClassicInput>Email</ClassicInput>
                            </div>
                        </div>
                        <div className={styles.form__inputs_block}>
                            <div className={styles.form__input_wrapper}>
                                <img className={styles.form__input_icon} src={zipCodeIcon} alt="" width={24} height={24}/>
                                <ClassicInput>Address</ClassicInput>
                            </div>
                            <div className={styles.form__input_wrapper}>
                                <img className={styles.form__input_icon} src={zipCodeIcon} alt="" width={24} height={24}/>
                                <ClassicInput>Zip Code</ClassicInput>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className={styles.form__select_title}>Select Preferred Contact</h4>
                        <Select setValue={setPreferredContact} value={preferredContact}/>
                    </div>
                </div>
                <Divider text={'Tell us about your grill'} img={tellUsIcon}/>
                <div className={styles.form__block}>
                    <div className={styles.form__grill_block}>
                        <ClassicInput disablePx={true}>Model of Grill</ClassicInput>
                        <ClassicInput disablePx={true}>Approx, time since the last cleaning</ClassicInput>
                        <ClassicTextArea rows={8}>Any Known Issues / Additional info</ClassicTextArea>
                    </div>
                    <div>
                        <div className={`${styles.form__uploadArea} ${isDragging ? styles.form__uploadArea_hover : ''}`}
                             onDragOver={onDragOver}
                             onDragEnter={onDragStart}
                             onDragLeave={onDragLeave}
                             onDrop={onDrop}
                             onClick={onBrowseFiles}
                        >
                            <input type={'file'}
                                   name={'file'}
                                   style={{height: 0, width: 0}}
                                   multiple={true}
                                   ref={filesInputRef}
                                   onChange={onFilesSelected}
                            />
                            <img src={uploadIcon} alt="" width={84} height={84}/>
                            <h3 className={styles.form__uploadArea__title}>Drop file here or click to upload</h3>
                            <div>
                                <p className={styles.form__uploadArea__text}>Maximum upload size 5mb.</p>
                                <p className={styles.form__uploadArea__text}>Accepted file formats: JPG, PNG, GIF</p>
                            </div>
                        </div>
                        <div className={'flex flex-col gap-4'}>
                            {files.map(file =>
                                <UploadedFile
                                    key={file.name}
                                    size={file.size}
                                    src={file.url}
                                    name={file.name}
                                    progress={file.progress}
                                    remove={(e) => {
                                        e.preventDefault();
                                        removeFile(file.name);
                                    }}
                                />
                            )}
                        </div>
                    </div>
                </div>
                <Divider text={'Schedule a grill cleaning'} img={scheduleIcon}/>
                <div className={styles.form__block}>
                    <div className={'mb-24'}>
                        <div className={styles.form__input_wrapper}>
                            <img className={styles.form__input_icon} src={calendarIcon} alt="" width={24} height={24}/>
                            <ClassicInput>Name</ClassicInput>
                        </div>
                    </div>
                    <div className={'flex w-full justify-center'}>
                        <LightRedCBtn>Send the form</LightRedCBtn>
                    </div>
                </div>
            </div>
            <div className={`${styles.form__block} ${styles.form__block__feedback}`}>
                <h3 className={styles.form__block__feedback__title}>You can also call or text us anytime:</h3>
                <div className={styles.form__block__feedback__infoItems}>
                    <PhoneInfoItem/>
                    <EmailInfoItem/>
                </div>
            </div>
        </form>
    );
};

export default Form;