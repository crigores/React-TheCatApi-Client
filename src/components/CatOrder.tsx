import { Menu, Dropdown, Button, message, Space, Tooltip } from 'antd';
import { ControlOutlined, DownOutlined, GithubOutlined, AliwangwangOutlined } from '@ant-design/icons';
import { useContext } from 'react';
import CatContext from '../context/CatContext';


const CatOrder = () => {

    const {getCats, getCatsByBreed, getCatsByCategory} = useContext(CatContext);



    function handleMenuClick(e: any) {
        // Listado por Raza
        if(e.key == 1){
            message.info('Listado por Raza');
        }
        // Listado por Categoría
        else if(e.key == 2){
            message.info('Listado por Categoría');
        }
        // Listado por Defecto
        else {
            message.info('Listado por Defecto');
            getCats();
        }
    }
    
    const menu = (
        <Menu onClick={handleMenuClick} style={{textAlign:'center'}}>
            <label style={{fontWeight: '600', fontSize: '14px'}}> Por Raza</label>
            <Menu.Item key="1" icon={<AliwangwangOutlined />} onClick={()=>getCatsByBreed("beng")} style={{textAlign:'left'}}>
                Bengal
            </Menu.Item>
            <Menu.Item key="2" icon={<AliwangwangOutlined />} onClick={()=>getCatsByBreed("char")} style={{textAlign:'left'}}>
                Chartreux
            </Menu.Item>
            <Menu.Item key="3" icon={<AliwangwangOutlined />} onClick={()=>getCatsByBreed("dons")} style={{textAlign:'left'}}>
                Donskoy
            </Menu.Item>
            <Menu.Item key="4" icon={<AliwangwangOutlined />} onClick={()=>getCatsByBreed("nebe")} style={{textAlign:'left'}}>
                Nebelung
            </Menu.Item>
            <Menu.Item key="5" icon={<AliwangwangOutlined />} onClick={()=>getCatsByBreed("sfol")} style={{textAlign:'left'}}>
                Scottish Fold
            </Menu.Item>
            
            <label style={{fontWeight: '600', fontSize: '14px'}}> Por Categoría Img</label>
            <Menu.Item key="2" icon={<GithubOutlined />} onClick={()=>getCatsByCategory('1')} >
                Hats
            </Menu.Item>
            <Menu.Item key="7" icon={<GithubOutlined />} onClick={()=>getCatsByCategory('2')} >
                Space
            </Menu.Item>
            <Menu.Item key="8" icon={<GithubOutlined />} onClick={()=>getCatsByCategory('4')} >
                Sunglasses
            </Menu.Item>
            <Menu.Item key="9" icon={<GithubOutlined />} onClick={()=>getCatsByCategory('7')} >
                Ties
            </Menu.Item>
            <Menu.Item key="10"icon={<GithubOutlined />} onClick={()=>getCatsByCategory('5')} >
                Boxes
            </Menu.Item>
            <Menu.Item key="11" icon={<GithubOutlined />} onClick={()=>getCatsByCategory('15')} >
                Clothes
            </Menu.Item>
            <Menu.Item key="12" icon={<GithubOutlined />} onClick={()=>getCatsByCategory('14')} >
                Sinks
            </Menu.Item>
        </Menu>
    );

    
    return (
        <Space wrap style={{ display: 'contents', textAlign: 'right'}}>
            <Dropdown.Button placement="bottom" onClick={handleMenuClick} key="0" overlay={menu} style={{marginBottom: '20px'}}>
                <ControlOutlined /> Por Defecto
            </Dropdown.Button>
        </Space>
    )
}

export default CatOrder;