import React, {useEffect} from 'react';
import { referCodeRequest } from '@redux/action/CommonAction';
import { useDispatch } from 'react-redux';
import Branch from 'react-native-branch';

const ReferalCode = () => {
    const dispatch = useDispatch()

    const refer = async () => {
        let lastParams = await Branch.getLatestReferringParams();
        if (lastParams) {
        dispatch(referCodeRequest(lastParams?.$og_title ? lastParams?.$og_title : lastParams?.userId ));
        }
      };
    
      useEffect(() => {
        refer();
      }, []);

    return (
        null
)};

export default ReferalCode;
