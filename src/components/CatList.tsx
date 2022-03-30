import React, { useContext, useEffect, useState } from 'react'
import {CatItem} from './CatItem';
import { Row, Col} from 'antd';
import {ICats} from '../models/Cat';

import CatContext from '../context/CatContext';

interface ReceivedData{
    cats: string[]
}

const CatList = () => {
    const [cat, setCat] = useState<string[]>([]);
    
    const {listCats} = useContext(CatContext);
    
    useEffect(()=>{
        if(listCats){
            setCat(listCats);
            console.table(cat);
        }
    },[listCats]);
    


    return (
        <Row justify="space-between">
            {cat.map((item:any) => (
                <Col span={6} style={{marginBottom: '20px'}} key={item.id}>
                
                    {/* <FeedbackItem key={item.id} item={item} /> */}
                    <CatItem key={item.id} item={item} />
                
                </Col>
            ))}
        </Row>
    )
}

export default CatList;