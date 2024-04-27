'use client'

import Card from "@/components/Card";
import Button from "@/components/tags/Button";
import Div from "@/components/tags/Div";
import Line from "@/components/tags/Line";
import Span from "@/components/tags/Span";
import Table from "@/components/tags/Table";
import { MovieContext } from "@/context/cart";
import { priceFormatter } from "@/utils/priceFormatter";
import { useContext, useEffect, useState } from "react";
import CompleteOrder from "@/components/CompleteOrder";
import TableRow from "@/components/cart/TableRow";
import Ul from "@/components/tags/Ul";
import MovieItemCart from "@/components/cart/MovieItemCart";
import MobileCartArea from "@/components/cart/MobileCartArea";
import DesktopCartArea from "@/components/cart/DesktopCartArea";

export default function Cart(){

    const [isOrderCompleted, setIsOrderCompleted] = useState(false)

    const [windowWidth, setWindowWidth] = useState<number>(0);

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);
        setWindowWidth(window.innerWidth);

        return () => window.removeEventListener('resize', handleResize);
    }, []); 

    return (
        isOrderCompleted ? (
            <CompleteOrder />
        ) : (
            <Card className="fadeIn" customStyles={{maxWidth: '100%', padding: '24px', flexDirection: `${windowWidth <= 480 ? 'row' : 'column'}`, justifyContent: `${windowWidth <= 480 ? 'space-between' : 'center'}`, overflow: 'auto'}}>
                {windowWidth <= 480 ? (
                    <MobileCartArea handleIsOrderCompleted={() => setIsOrderCompleted(prevState => !prevState)} />
                ) : (
                    <DesktopCartArea handleIsOrderCompleted={() => setIsOrderCompleted(prevState => !prevState)} />
                )}
            </Card>
        )
    )
}