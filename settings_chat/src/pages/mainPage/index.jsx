import React from "react";
import styles from './index.module.css'

import useUploadConfigs from '../../hooks/uploadConfig'

import InputConfig from "../../components/inputConfig";
import InputConfigGpt from "../../components/inputConfigGpt"
import ButtonSubmit from "../../components/buttonSubmit";

function Main() {
    const { data, uploadConfig, eventInput, eventImageUpload } = useUploadConfigs();
    console.log(data)

    return (
        <div className={styles.master}>
            <div className={styles.container} >

                <div className={styles.topBody} >
                    <input type="file" placeholder="perfil" onChange={(e) => eventImageUpload('perfil', e)} />
                </div>

                <div className={styles.centerBody} >
                    <div className={styles.leftCenterContainer} >
                        <input type="file" placeholder="background" onChange={(e) => eventImageUpload('background', e)} />

                        <InputConfigGpt placeholder='CONFIGURAÇÃO GPT' eventChange={(e) => eventInput('gptConfig', e)} value={data.gptConfig} />
                    </div>

                    <div className={styles.rightCenterContainer} >
                        <InputConfig placeholder='NOME PERFIL' eventChange={(e) => eventInput('name', e)} value={data.name} />
                        <InputConfig placeholder='EMAIL' eventChange={(e) => eventInput('email', e)} value={data.email} />
                        <InputConfig placeholder='WHATSAPP' eventChange={(e) => eventInput('whatsapp', e)} value={data.whatsapp} />
                        <InputConfig placeholder='INSTAGRAM' eventChange={(e) => eventInput('instagram', e)} value={data.instagram} />
                        <InputConfig placeholder='HOME SUBTITLO 1' eventChange={(e) => eventInput('homeSubtitle1', e)} value={data.homeSubtitle1} />
                        <InputConfig placeholder='HOME SUBTITLO 2' eventChange={(e) => eventInput('homeSubtitle2', e)} value={data.homeSubtitle2} />
                        <InputConfig placeholder='CHAT SUBTITLO' eventChange={(e) => eventInput('chatSubtitle', e)} value={data.chatSubtitle} />
                        <InputConfig placeholder='CHAT INPUT PLACEHOLDER' eventChange={(e) => eventInput('chatInputPlaceholder', e)} value={data.chatInputPlaceholder} />
                    </div>
                </div>

                <div className={styles.bottomBody} >
                    <ButtonSubmit eventClick={uploadConfig} />
                </div>
            </div>
        </div>
    )
}

export default Main;