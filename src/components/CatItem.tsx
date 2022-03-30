import React from 'react'
import { Card } from 'antd';
const { Meta } = Card;


export const CatItem = (props: any) => {

    if(props.item.breeds.lenght>0){
        console.log("props", props.item.breeds[0].description)
    }
    return (
        // 
        <div>
            <a href={props.item.url} target="_blank">
                <Card
                    hoverable
                    style={{ width: 250, color: 'black' }}
                    key={props.item.id}
                    cover={<img alt={props.item.id} src={props.item.url} />}
                    >          
                    <Meta title={props.item.url} />
                </Card>
            </a>
        </div>
    )
}