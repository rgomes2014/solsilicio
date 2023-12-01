"use client"

import Button from "@/app/components/__ui/button";
import Input from "@/app/components/__ui/input";
import Text from "@/app/components/__ui/text";
import { useState } from "react";

import styles from '@/app/(public)/signin/styles.module.css'
import '@/app/(public)/global.css'
import Link from "next/link";

const Signin = () => {
    const handleSubmit = () => {
        alert('funcionando')
    }
   
    return(
        <div className={styles.signin}>
            <div className={styles.boxSignin}>
                <Text tag="h2" className={styles.title}>Acessar minha conta</Text>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <Input className={styles.input} type="email" name="email" placehodolder="E-mail" />
                    <Input className={styles.input} type="password" name="password" placehodolder="Senha"/>
                    <div>
                        <Link href="/">Esqueci a senha</Link>
                        <Button className={styles.button}>Acessar minha conta</Button>
                    </div>
                </form>
            </div>
            <Link href="/">Criar uma Conta Grátis</Link>
        </div>
    );
}

export default Signin;