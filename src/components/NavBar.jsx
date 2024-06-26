import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ isAuthenticated, handleAuth }) => {
  const navigate = useNavigate();
  const existingUsers = JSON.parse(localStorage.getItem('users') || '[]')[0];

  useEffect(()=>{
    if(existingUsers){
      handleAuth(true)
    }
  },[])
  const handleAuthAction = () => {
    if (isAuthenticated) {
      alert('You have been logged out.');
      handleAuth(false);
    } else {
      navigate('/login');
    }
  };

  return (
    <nav className="bg-white shadow fixed w-screen left-0 top-0 z-10 flex justify-between items-center p-4 px-40">
      <div className="navbar-logo">
        <Link to="/">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACdCAMAAAA5QrUjAAAAM1BMVEX////tLDHyYWX2lpj7ysz+8vLuOT7vRkvwVFj819j95eX4sLL0e373o6X1iIv5vb/zbnHwtRUkAAATUUlEQVR4nO1d2ZbjKAytGLyv//+1EwNawY6TQFVyevTQXfGC4VoSkhDyz8+nU7+ancbhrzvy6dTPW3MDquxfd+eDaV3am6Txr7v0mVSPjKWI1r/u1+fRHakEUDu1f921T6N+SvHU/4KYIFsdI3Wn7q/790FULxE8zTbb+g5iYLf6r7v4MVR3mpFMD+cCjGg+DN6qaLZ/VTI3yVIjZ6PVHzX+l2WXtv/kHGkZVJNGoGdg1Wq2nP6gs39NE0rfmFBNBFYfTZdfhJadTVWFATRVZeYX/ZJgsB+4NeFkCqtvQWtdknN9t6zPz1vhVnmwn8XZW5M2wz5fbx1a2o62lDCdkCVBI7rPj+Gv+AHNZhC5D7fthzNLG7jgmbhKEqwbgDXoxr20oq7/ZAvigaWthnSJan+HE8MBZkMEy6qGEZyK3faRdBUqB9dl7goKvjWmQ5WNYK0prKb7qxgCg39ocLCebhG1VaCEbC4XdZdotvLHECwjmvRQ9reFbvtMOVwVHt0y9vx8Py7KbWmvyaJQSwmwmsWYirPR4q5K6rrPIGU9H0x5OiR1xly1dUF2sw6cezRY1W1zbbhXtfljnUcIeHubP0wUex7qTVraQPUoLu3TVw08dsxv0GB1YHfOKHJ3TpzDNfjuPilOP/LhPOwYnwealNl4MlFosMhGbyFQc9f5fbjmmV79FplnO2UZs0QaWPvDgrwKqhEs/3P/ZwEL1KsscLGpZwdMHJM3Fdvp8g3PEE1XzeW5Z27U+JFSPp4Gy3Kw7uDuSsmAyqo8Y80H9z4kijRO+WOKhNX2ROMDiZpwd8dzByABlvGxPwNgdP6N6QUz/aAj4nzd5BZexOo6W3kyqUFo4XkMVt0AWEH91aJ1YeFdQGtJPS8XIbc3T4u4xXEgzAMNrTN2cAZEG3eeg7V3wIPF2QBAv5unK5suHkYhIl8zZ5QH58HuBfkmgwPQwnFtDHo+HcRgdSmwUPE5dAbk/odRiNgLmR/dcpmwU69gxZciPDbg6WmDgoZAYAU0HStosMibCMd6eNAj1go3Voa8jVwmbQ3v/DWsGFqN61JoLpZo1CQEVoBhjMHabY/Krh0D66cOPPtAqoKPtMcqcKbJJYgwc7yKFUOro67eEnMQyKcHa6WLJgIrcI0b5RrUFq2RBZY5707QwE4rDKFrzatjk4RS84Y9UjcEwyRfZT1VFSizga768VNdgKElsPw5r9r3Hu3/k8YJcJ/3JsyhnrNBbrLYDzDO5+dBTqj2epDCgTcPyG3snbsxURgQwPJc0ws+pal/ugLWIi4Ks1cWFQ9q982QEfBnNZBAsubDmxj5W55uXHv5oxv4hk0Y3yzBEkxzRJL9+KLkmwQaZnu3IbAfJ9G3WggeyKEHq8PjIx6t4NAU8G6TYJ3LlJLVTAOkht9RWIFkUDAMB94FqGR2cqDjCwfLT6n15Hy6WXHFfB0sDNzLHrxBMJgMS3PSx1FggR1Z0Un/p3tJXs3N4SCblUctQvYKWAqdbGBV2VpSDhnYkfC75s+zFMLZcZipE2466GBygBYjsM7fbSGwYCxZ51XRIhi8fNq7m9YUFWB/V2v4s5lWa2e6JgLLHejHPStc6vr6fl+4ZoFjucAK2jiH8vuRizQAFsghLNm8RDFYLIm3NSC2vUiBxpsygQW8kCngw1kLuxpEyc8giXW2l8CSYa7G2VC2O7gpE1hjpnaAeGQaDwaAdqnQK88vg6Vpq+MwNhqOmQa5qWbfJR5HoiktQLhY8zCB4lWwbp1OwmTikgesYDFmsLGA2Otl7oVeuS0AVoIygxVclIxhRLaaxiN0ffzeDygN60tgIQvkASvo3oy5YjXrLPdc6/QaYlWpBYn7PcMYL1IkwWqm2d4NBXl1Z0ZrfcwP78kDVqdeQQZiLCSlO5oH27BvrmfJAJ4b6witBFgtKFqeybJBPHRf4MV78oCVpxVBiYyGQAotznfDIu/wwryvM9m5S4NlUi3ziWqmnK4sw9SWbg4SmVYyKiLQUjGWEA6DrvAfYwosgMU67u1i/O9N4l9ZwAouWdb0VrkIJWwSvsUiisRZgW7Ff3QxWHD70Djfw/sFh+mBWcBaki/5TZLCJtCi5cRExycOwsbBWiKwNnYT3YwvvVYjygLWpXg29sCa+QqsykgQaKGMJtalcDFsJ8PBMhFYeHsTer83jKbKohPsMoIFDzlFovbG94WdNNpGEGhtJ/3eNFhg/lkNFtqFK77qG+k7B6dYULgJEX+RZM/PfB5SNykDtp8NgcgyRcykux08baaxrIHn7oocjA3DOxaBJTaT+b86ksIteh8FwDqx47lqjuZOb28izwFYLhtwn+QEWt6yoCM7QiHUNzCNMB2CNXLXoMMfFclmMNLYUzOCBaM/yTVPhUCBEMgRu+3A80ziwGDGqWct9TM8uaET1SFYhr2umi6q9PIEf6kZwcJlmMPrZMROZWWg2Pl1BrX8UutuGtFCcCXX0FInGj0CC0V+JYmudBCZGxL5wbLHYCnbOz3BweAM+xuewSa/gZ8EZH0XFjrRnYFV87tD020EFhtOfrDMIVjcOd5JxKD55DfACNjbd7+4Ouw4WGJ2NGrAkJ2gwCKWqbDlIYq4c6WVEawFnnx0mdorIgwzYbCbMIJb5MQyrTVzsMTakqHXIJ4jwKoY8g366nMUROa6NSNYmGZ9dJncKyK6IbLBfUtC3QBXMsntE2DdwnOMvCv8sjIxhAZNE22bAIuemQUsb/S0MIajy6JQFDOTJJB4NXYs+L1cDi+AZTVYlt1BJh1iJXxtwefsyJtgVYxR5ifAMkfn8AjCGcDsRHMXwWrpF4HVJlainAGilif4C8oCFlsIRpc0QS+AhQPq2Bm85SJYbDbk+icOVW7ikdCZ6kceeRMs0M77O2iLgIX6nxkPhtlZr4AV9c9bNiidEGbNDBb2dRvUzpDkVSmwpAmGV8PgcCJlsmPYkwRY0wWw6ribk+oUtKnBejcgTNH/9gSsKHrOQg9CwbfYV6tPS7DwF+Q7hR8w4OEQLKu7iWurxcGSTt/RRdH2GSZTYmVqwr4CnAgWc2unWP/7cTRqRmMxl0Ow3I6FtuKmA7xbcg4zgSWK6RxdpJM5hHPI1/nchCRMB5Nou2I+QDjvfg+aO5hQIlirUPCDY6vdZ1+jNiPT4f11GY7W4UVqZUoEaRhvgjCxjkHHuenQsDTroNMcp40MxIWzJweLyzDsSXP9WfARIAikLHKBxbcFHl4jzHQVE2aJM164WD5fcuGqRx78QaZ1Qjoxnu3x6E8EFhpU0K1gJ9Z0Oe/CD3B/lhW/FRjn+BLBWir6h0hSZImh4e9sGL6z6Lg77zByqPfsOCLHwVrY84Fta/8DOEllS2OXMi2PPly44Gq81UYhpC2JPEgY6Sqg26klbvgJ8jZiM2h1WyZGVk6fiILwDha696af+dTCzCN63BgJYmJrQb81N9xDAY3BhDe2t447KCojbF8d86NsJQtaUjlWaf6BjtOTWsoWcD3guQO/DBbuFzraZx81drBfA9MYAMy+8kAEtZzK17RM9Ch1/ifg64PWPTs+8/Z3Mkxc36YryNdzdWuvlODDBYtk38jAlWDibpbEE6xKaUem2W9qe2wXjstg7M/FjQZXqQSb4jAEMftWsN5AFkyMlmWi5y5B1hrmkS4httzgTfVi7/Ang5VwXaXjRKdFZmBUf8SQVHFTgxHYL+Gq2pfvuFtF/o18BVi31nCbbNVpV60ridfPasW/mYxZKtrZ7haEPIJzgit5XiFnS2dvuyt1Yc8c48vSlo5RdGa1O81ToujAAwqjYxla0IYoPjCnEspBsu+Qgz7MOr6sjeUgv8c6GBs70zDfCsrCDSpNEmqd2Cg5NVPBsr8Ba9oe81plDOq5ycimu7u06pRUd3wxxiQSfjPtv/8TsPbJvY8q6JejXPnrfwbWT6rWTCHKld9YHqxqL849WM5ImOn0G0hl3ERSGixWRXGMMyVPy6G+Rc0ICu9iqb0nxpe1MUbCNsVoYxUdSVK7TXS+emqq3SfMYZ6qyuRMMS4LlneCB8jwA2zIe6tHI2lDUDxHQFr8rqJX3f62W7bagLjfuRQqEVgUrJAd0KBrLSIrh1Q7BRdiVLukdiKFMlAz4xwHNlhT7zZwuW8WFAWL1QwLQ99Zq7tg9dQdSPAoYo40gQo3EmaKwjW+i4KF4Sb4+84a14qT1Jih1ss7DiouT8Ba7w/ihEqC5YcrCgyYaxtg9s1hoNhkWcQQZECseu8XQWAxX6msFP0aWFCv59FEPthgkh0sMjj9RIhDqkkQxLJVq8uDVXN1sqSyhuz+ObpK7z88GPcu1aTEeuz7b3yRpjxYQZ/4mTFKsarNoYvIL1tIR7VcYdHWgayBqwMqGs/yR4Oa2W2fMRoNBRZGO9xnfpNc+F3FihjLIaCkFvlFmjJUfjaEFYnJq2GD4XF+C6uPiqWbWcN8xdrwKB9dF9ZXs26g1PQLdhbEfhcvcW3DWUNeGGjSferYNYblEOxml6yhlHVrrqaiYJEPqM7QLWnZmVSfmFD/TEzzbzcyRL8dLKag4jRBTwcDbG98Yht4Yx2TNCjhBi19NVis6yJ2RYclpOJqOsxTJwd23IEIJaR8y9+rs4RFzdGio0fM0HKwVsanFeO4kd39G99wKB38Y74KQ4sO3g4CmQsHKwQb7p7NsHFjdWEPyF/UI6bSYHEvmFaz6NhNJMiNG8Rd1gRYnlj+SMXEThb9LEPFY/A8pwvjnnRI/FgI3foQLCZoLcVkvt43DP3Xs5oCq1KnG6hVejCVMkFrxfcvdvreqEOMFrAI3cLBCmI6hrZsul02d8YNf28862ZqV1+O0Kqj1AMZbnHkD2xHYKXwgAz0L46U+srZN46HUY+r5eZLR7BdM1UCId1VTJt+nJz4FhUEa6ODtP/GDYtKjtsTsKITR11lC2pl48oFwerpoKqYSD9TYHkor4Mlv0WVZyRpKgeWKBKM4rGegCXguAyW+nJNyW/WlQNr4gdx4HUElt51+hxYfpdIYzCVouRnScuBBWO9SXhaDRb9EFtfJwaWWOQXTwyZf7tOhCXFgjq+HFhBqa/qAVKF8dRtuV2zSsgnb3cnSCiFjRbiJRWg4mAt6gGbBiva2+rPdswJFGCRRYEFzDw+wT/IVCs6RcXB6hQ/GAGWiFsJsOLtqAKZnWb1KH57ESoOlhYeyVnmFu9DdSYsr5cha7xIpB3V/FFfCVbwaW/qAVJn7WDprV7uRl6JRVW+rfVxaOCLwQomAS9NspOcDR0+EIMKc4Gbzja56ZATWlLAcXILRsHAcjmwgk+zceSCFibTSlRDHAjXmndKFcTRtgZEzGYBXQnKClYYTGjTT1u+ZiEGMNWndLxJCYLVIeOMvFO6XgLqv1H8jGvY5aacYMHHvHjpFmc7sNiy+pSOfzz8XvGulqOgE0/JMpvY5+6Cuv8WCx6+/QIB0SAQQ1RGKnJkaNXB7yAeGWvGX3fke8rwG85gdJVc3skJ1gTiB3l4kUSEEdGAYJOsjKzUotpyYm9B7C1jmKbkikVOsDBFCqYv/UVIGFHsyAi0auHFpL5jG6GFe5u+ZZGVLbCgSt74i8aPjdJ2VBx9RxfS1lZ3LP1RFZF/S5/4/prgH1tgYSXwt1Anvx4T3x3iFlRIXu8Xik9tUEUlQc3iVGFtR76bsexXzF8Bq17aJt5fDsvGPkVZRORatT0CwZLqqKmqSkby2id3MFYft7oT9INaHFCp6KdfKUewsu/def1rqVfoebAoZYHrDeARND/P0IqKtz2gqjL7DmIBhLWrWeINmn+TcjQciD9Phmmm1Q+AdtXQRBd/ZikC6+EHsZrKjA+2l+gd2CXXpA/A2lP1mpR9F1V5lYpGLK7oD3hpsE6/o3PH6fIunIEp+ZIWfPrzDMHS2aLenqoiWdJoJzuJ66eNg3XS1nbpwwbyUcDcBSfEoGvUujd+Glqh9QirxBDtvuvvTpuxoiRFHRXXhUamF3OsdLXE/DSkWIJ0iUQLsWrGlIQ9XjyH0nXGTAewv4oUDaWkcyhdC0dc7/KSE1gJZeeg+ENVUW2UmB587audHzXhtq5sFdJiDM6Sv7BtAGY3tOdqNUdByQk6HqRtFNPddklXnIlxe76YPKymOrq9qqYJdFbJJWkqW2J2DOJNtHuZlH0/Lv2mj9zc+7+bOtU0XnT2jxTVA6jq8XqFlqKJkkeiccgEb726I2vCHAtgVN3nlIpapUdvuzuart5jc26qNghCqt6Wp+F411iStPGSnVKG9D4NjgnmurZr94ysh+vuiuOK8pH/Wz/FU46KaixHMVreHB3iLRNZXlxv7d4OsO5BcqM98YbcVJjQrmUz/zypD6c26GBJA+HBfPUshbaTWqZOTDR7WYy7ryjel7WjmTxs1VI2mkV9Y6qhEcp2xXnoSonEZygsiqaCm0PCZn3CVyxPvfNLnFeiaS8tkZ/Bg6cVG5E2kv52KbrN5AvooHbhGNUdWX5DE304JcHSXlTzP1KOAlhME9b6M+bbvy59SMF1QMutV6ZCY0obmN9EwEbbbO2sSwB25c3Lr6ITo/NaDONfovrIV5/+l7+YotUPP//9D1WSYle9PYnV/OvUSwu0+iOt/h/CqIHi2RhTTAAAAABJRU5ErkJggg==" alt="Brand Logo" className="h-10" />
          
        </Link>
      </div>
      <div>
        <button
          onClick={handleAuthAction}
          className="bg-black text-white px-4 py-2 rounded"
        >
          {isAuthenticated ? 'Log Out' : 'Log In'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;



