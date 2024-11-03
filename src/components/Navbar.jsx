import { useState } from "react"
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { logo, menu, close } from "../assets"

const Navbar = () => {

    const [open, setOpen] = useState(false);
    const handleClick = () => setOpen(!open)
    
  return (
    <div className="w-full h-[120px] z-10 bg-[#ffffff] fixed drop-shadow-lg">
        <div className="flex justify-between items-center w-full h-full md:max-w-[1240px] m-auto">
            <div className="flex items-center">
                <img src={logo} alt="logo" className="xs:ml-10 sm:ml-10 ss:ml-10 md:ml-3 ml-3 opacity-[60%] w-full h-[108px]"/>
            </div>
            <div className="flex items-center">
                <div className="w-full">
                    <TextField
                        fullWidth
                        label="Search products"
                        id="search"
                        slotProps={{
                        input: {
                            endAdornment: (
                            <InputAdornment position="end">
                                <SearchIcon />
                            </InputAdornment>
                            ),
                        },
                        }}
                    />
                </div>
            </div>
            <div className="hidden sm:flex sm:mr-10 md:mr-10 xs:mr-10">
                <Box
                    sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                        }}
                        >
                    {/* Giriş Yap / Bu kısım görüntü olarak koyulmuştur herhangi bir fonksiyonu yoktur*/}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1}}>
                        <AccountCircleOutlinedIcon />
                        <Typography >
                            Giriş Yap
                        </Typography>
                    </Box>

                    {/* Favorilerim  Bu kısım görüntü olarak koyulmuştur herhangi bir fonksiyonu yoktur */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <FavoriteBorderOutlinedIcon />
                        <Typography>
                        Favorilerim
                        </Typography>
                    </Box>

                    {/* Sepetim */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <IconButton>
                        <Badge badgeContent={2} color="error">
                            <ShoppingCartOutlinedIcon />
                        </Badge>
                        </IconButton>
                        <Typography>
                        Sepetim
                        </Typography>
                    </Box>
                </Box>
            </div>
            <div className="sm:hidden" onClick={handleClick}>
                <img src={!open ? menu : close} alt="menu" className="w-[28px] h-[28px] object-contain mr-10"/>
            </div>
        </div>
        <div className={open ? "w-full absolute bg-[#ffffff] p-2 md:hidden": "hidden"}>
            <Box
                className="flex flex-col items-center gap-y-2"
                    >
                {/* Giriş Yap / Bu kısım görüntü olarak koyulmuştur herhangi bir fonksiyonu yoktur*/}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, width:100, marginLeft: 2, marginBottom: 1}}>
                    <AccountCircleOutlinedIcon color="primary"/>
                    <Typography >
                        Giriş Yap
                    </Typography>
                </Box>

                {/* Favorilerim  Bu kısım görüntü olarak koyulmuştur herhangi bir fonksiyonu yoktur */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 ,width:100, marginLeft: 2}}>
                    <FavoriteBorderOutlinedIcon color="primary"/>
                    <Typography>
                    Favorilerim
                    </Typography>
                </Box>

                {/* Sepetim */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 , width:100}}>
                    <IconButton>
                    <Badge badgeContent={2} color="error">
                        <ShoppingCartOutlinedIcon color="primary"/>
                    </Badge>
                    </IconButton>
                    <Typography>
                    Sepetim
                    </Typography>
                </Box>
            </Box>
        </div>
    </div>
  )
}

export default Navbar