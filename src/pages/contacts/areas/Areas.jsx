import React from 'react';
import styles from './styles/areas.module.scss';
import {Divider, List, ListItem, ListItemIcon, ListItemText, Stack, useMediaQuery} from "@mui/material";
import {DarkRedCBtn, GrayCBtn, UnfilledCBtn} from "@shared/buttons/api";
import {ourAreas, ourAreasLA, ourAreasSD} from "@assets/wordpress";
import {ClassicContainer} from "@widgets/api";
import map from '@assets/images/contactsPage/map.png';
const Areas = () => {
    const isXlSize = useMediaQuery('(min-width: 1536px)');

    return (
        <section className={styles.section}>
            <ClassicContainer>
                <div className={styles.section_wrapper}>
                    <h1 className={styles.section_title}>Service Areas</h1>
                    <p className={styles.section_subtitle}>We proudly serve:</p>
                    {isXlSize && <Stack direction={'row'} spacing={2} mt={7} mb={11}>
                        <DarkRedCBtn fontWeight={400}
                                     uppercase={false}
                                     fontSize={20}
                        >Greater Los Angeles Area</DarkRedCBtn>
                        <GrayCBtn fontWeight={400}
                                  uppercase={false}
                                  fontSize={20}
                        >San diego</GrayCBtn>
                    </Stack>}
                    {!isXlSize && <h2 className={styles.section_list__title}>Greater Los Angeles Area</h2>}
                    <List className={styles.section_list} classes={styles.MuiListRoot}
                          sx={{
                              padding: '0 0 40px 0'
                          }}
                    >
                        {ourAreasLA.map(area =>
                            <ListItem key={area.id}
                                      sx={{
                                          maxWidth: 'fit-content',
                                          display: 'flex',
                                          justifyContent: 'flex-start',
                                          gap: '0px',
                                          padding: {
                                              sm: '8px 16px',
                                              xs: '4px 8px',
                                          }
                                      }}
                            >
                                <ListItemIcon className={styles.section_list__icon}
                                              sx={{
                                                  minWidth: {
                                                      sm: '40px',
                                                      xs: '20px'
                                                  }
                                              }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="15" viewBox="0 0 19 15" fill="none">
                                        <path d="M2 7.11538L7.25 12.5L17 2.5" stroke="#BC1922" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </ListItemIcon>
                                <ListItemText primary={area.title} primaryTypographyProps={{
                                    fontSize: {
                                        sm: '16px',
                                        xs: '14px'
                                    }
                                }}/>
                            </ListItem>
                        )}
                    </List>
                    {!isXlSize && <Divider color={'white'} flexItem={true}/>}
                    {!isXlSize && <>
                    <h2 className={styles.section_list__title}>San Diego</h2>
                    <List className={styles.section_list}
                          sx={{
                              padding: '0 0 40px'
                          }}
                    >
                        {ourAreasSD.map(area =>
                            <ListItem key={area.id}
                                      sx={{
                                          maxWidth: 'fit-content',
                                          display: 'flex',
                                          justifyContent: 'flex-start',
                                          gap: '0px',
                                          padding: {
                                              sm: '8px 16px',
                                              xs: '4px 8px',
                                          }
                                      }}
                            >
                                <ListItemIcon className={styles.section_list__icon}
                                              sx={{
                                                  minWidth: {
                                                      sm: '40px',
                                                      xs: '20px'
                                                  }
                                              }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="15" viewBox="0 0 19 15" fill="none">
                                        <path d="M2 7.11538L7.25 12.5L17 2.5" stroke="#BC1922" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </ListItemIcon>
                                <ListItemText primary={area.title} primaryTypographyProps={{
                                    fontSize: {
                                        sm: '16px',
                                        xs: '14px'
                                    }
                                }}/>
                            </ListItem>
                        )}
                    </List>
                    </>}
                    {!isXlSize && <UnfilledCBtn
                        uppercase={true}
                        fontSize={16}
                        fontWeight={800}
                        borderWidth={2}
                    >More about our service areas</UnfilledCBtn>}
                </div>
            </ClassicContainer>
            <div className={styles.section_map_wrapper}>
                <div className={styles.section_map}>
                    <div className={styles.map__wrapper}>
                        <img src={map} alt="" width={'100%'} height={'100%'}/>
                    </div>
                    <svg className={styles.section_map_overlay} xmlns="http://www.w3.org/2000/svg" width="760" height="571" viewBox="0 0 760 571" fill="none">
                        <path d="M2 163.28V260.72L7.46 264.08L19.64 271.64L21.74 277.52L27.2 291.8L39.38 301.04H47.78L54.5 306.08L72.14 309.44L88.1 317L101.54 312.8L114.14 309.44L126.74 312.8L135.56 324.56L147.32 348.08L143.54 353.12V361.52H147.32L158.66 366.56H162.44L175.04 361.52L185.12 359L208.64 384.2H217.04L232.58 396.8L242.24 408.56L251.06 411.92L274.16 432.08L284.66 448.04C288.72 455.04 297.092 469.544 298.1 471.56C299.108 473.576 303 485.84 304.82 491.72V508.52V514.4L307.34 521.12V527.84V541.28H317.84L322.88 548.84L325.4 569L476.18 553.88V475.76L480.38 471.56V415.7H689.12V407.3L697.52 399.74L707.6 386.3V369.5L710.12 366.98V356.9L705.5 350.6L702.56 342.2V327.92L714.32 312.8V302.72L721.88 296L733.64 291.8L749.6 279.2L758 270.8V260.72L749.6 250.64L721.88 238.88V223.76L714.32 210.32V197.72L702.56 187.64L697.52 172.52H689.12V143.96L536.24 2H528.68V7.04H258.2V172.52H91.88L82.64 180.08H33.92L27.2 172.52L15.44 163.28H2Z" fill="#FF878E" fillOpacity="0.6" stroke="#BC1922" strokeWidth="3"/>
                    </svg>
                    <svg className={styles.section_map_stroke} xmlns="http://www.w3.org/2000/svg" width="665" height="250" viewBox="0 0 665 250" fill="none">
                        <path d="M32 9L51.5 68V78.5L63 90.5V98L65.5 100V104L59 107.5V113.5L61 117H40.5V122.5H37V126.5H29L27 130H0M202 0V100H207V108.5H198.5L194 113.5L195.5 117V130L187 139V147V150.5L183.5 152M183.5 152L177 148L168 153.5L162.5 154.5L154.5 164L131.5 174.5L128.5 177H119.5L117 174.5H112.5L106.5 173H97M183.5 152L187 157.5L194 159.5L201 165.5L207 171M213 248.5L227.5 237M227.5 237L226.5 229L224.5 225.5L226.5 219L239 209V204.5L235.5 201.5V196.5H227.5L224.5 193.5V188.5H218L215 190L213 184.5L211 182.5V177L207 171M227.5 237L233.5 232.5H239L251.5 235L263 244.5H430.5M207 171V164L211 162V159.5H215V152L224.5 144L229.5 145.5L235.5 144H245L255 154.5L276.5 156L299 153.5L309 154.5L322 150.5L330.5 144H542.5V131.5H665" stroke="#BC1922" stroke-width="2"/>
                    </svg>
                    <div className={styles.section_map__areas}>
                        <p className={styles.section_map_ventura}>Ventura</p>
                        <p className={styles.section_map_losAngeles}>Los Angeles</p>
                        <p className={styles.section_map_sanBernardino}>San Bernardino</p>
                        <p className={styles.section_map_riverside}>Riverside</p>
                        <p className={styles.section_map_orange}>Orange</p>
                        <p className={styles.section_map_sanDiego}>San Diego</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Areas;