import * as React from 'react'
import { FormatAlignCenter, FormatAlignJustify, FormatAlignLeft, FormatAlignRight, FormatBold, FormatColorFill, FormatItalic, FormatUnderlined } from '@mui/icons-material'
import { Stack, ToggleButton,ToggleButtonGroup } from '@mui/material'

const MuiToggleButton = () => {
    const [alignment, setAlignment] = React.useState<string | null >('left')
    const [formats, setFormats] = React.useState<any>(['bold'])

    const children = [
        <ToggleButton value="left">
            <FormatAlignLeft/>
        </ToggleButton>,
        <ToggleButton value="center">
            <FormatAlignCenter/>
        </ToggleButton>,
        <ToggleButton value="right">
            <FormatAlignRight/>
        </ToggleButton>,
        <ToggleButton value="justify">
            <FormatAlignJustify/>
        </ToggleButton>
    ]

    //for exclusive selection
    const handleAlignment = (event:React.MouseEvent<HTMLElement>, newAlignment:string | null) => {
        setAlignment(newAlignment)
    }

    // for multiple selection
    const handleFormats = (event:any,newFormats:any) => {
        setFormats(newFormats);
    }

  return (
    <>
    <h2>Exclusive selection</h2>
    <ToggleButtonGroup 
    value={alignment}
    exclusive
    onChange={handleAlignment}
    color="primary"
    > 
        <ToggleButton value="left">
            <FormatAlignLeft/>
        </ToggleButton>
        <ToggleButton value="center">
            <FormatAlignCenter/>
        </ToggleButton>
        <ToggleButton value="right">
            <FormatAlignRight/>
        </ToggleButton>
        <ToggleButton value="justify">
            <FormatAlignJustify/>
        </ToggleButton>
    </ToggleButtonGroup>
    <h3>{alignment}</h3>
    <hr/>

    <h2>Multiple Selection</h2>
    <ToggleButtonGroup
    value={formats}
    onChange={handleFormats}
    color="error"
    >
        <ToggleButton value="bold">
            <FormatBold/>
        </ToggleButton>
        <ToggleButton value="italic">
            <FormatItalic/>
        </ToggleButton>
        <ToggleButton value="underline">
            <FormatUnderlined/>
        </ToggleButton>
        <ToggleButton value="color">
            <FormatColorFill/>
        </ToggleButton>
    </ToggleButtonGroup>
    {
        formats.map((item:any) => {
            return (<h3>{item}</h3>)
        })
    }

    <hr/>

    <h2>Size</h2>
    <Stack spacing={2} direction="row" justifyContent="center">
    <ToggleButtonGroup size='small'>
        {children}
    </ToggleButtonGroup>

    <ToggleButtonGroup size='medium'>
        {children}
    </ToggleButtonGroup>

    <ToggleButtonGroup size='large'>
        {children}
    </ToggleButtonGroup>
    </Stack>

    <h2>Orientation</h2>
    <Stack spacing={2} direction="row" justifyContent="center">
    <ToggleButtonGroup size='small' orientation='vertical'>
        {children}
    </ToggleButtonGroup>

    <ToggleButtonGroup size='medium' orientation='vertical'>
        {children}
    </ToggleButtonGroup>

    <ToggleButtonGroup size='large'  orientation='vertical'>
        {children}
    </ToggleButtonGroup>
    </Stack>

    </>
  )
}

export default MuiToggleButton