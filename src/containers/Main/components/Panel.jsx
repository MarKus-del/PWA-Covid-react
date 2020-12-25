import React, { memo } from 'react';
import { Card, Typography, Button, Select, MenuItem } from '../../../components';
import COUNTRIES from '../../../commons/constantes/countries';
import { CardPanelContentStyled, ItemStyled } from './style';

const navigateHasShare = navigator.share;

function Panel({ updateAt, onChange, data, country, getCovidData }) {
    const { recovered } = data;

    const renderCountries = (country, index) => (
        <MenuItem key={`country-${index}`} value={country.value}>
            <ItemStyled>
                <div>{country.label}</div>
                <img src={country.flag} alt={`Pais-${country.label}`}/>
            </ItemStyled>
        </MenuItem>
    );

    const textCovid20 = `Pais - ${country} - Recoperados: ${recovered}`
    const copyInfo = () => {
        navigator.clipboard.writeText(textCovid20);
    }
    const shareInfo = () => {
        navigator.share({
            title: `Dados do Covid20 - ${country}`,
            text: textCovid20,
            url: 'https://pwa-covid19.netlify.app/'
        })
    }

    const renderShareButton = (
        <div>
            <Button variant="contained" color="primary" onClick={shareInfo}>
                Compartilhar
            </Button>
        </div>
    );

    const renderCopyButton = (
        <div>
            <Button variant="contained" color="primary" onClick={copyInfo}>
                Copiar
            </Button>
        </div>
    );
    

    return(
        <Card>
            <CardPanelContentStyled>
                <div>
                    <Typography variant='h5' component='span' color='primary'>COVID20</Typography>
                    <Typography variant='h5' component='span' color='primary'>Painel Coronavírus</Typography>
                    <Typography variant='body2' component='span' color='primary'>Atualizado em: {updateAt}</Typography>
                
                    <div className="pt-2">
                        <Select onChange={onChange} value={country}>
                            {COUNTRIES.map(renderCountries)}
                        </Select>
                    </div>
                </div>
                {navigateHasShare ? renderShareButton : renderCopyButton}
            </CardPanelContentStyled>
        </Card>
    );
};

export default memo(Panel);
