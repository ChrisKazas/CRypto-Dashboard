import {Fragment, useState} from 'react'
import PulseLoader from 'react-spinners/PulseLoader'
import { css } from "@emotion/react";


const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export default function Loading(props)  {


    const [color, setColor] = useState('Gold');


    return (
        <Fragment>
            <p>loading...</p>
            <PulseLoader color={color} loading={props.loading} css={override} size={25} />
      </Fragment>
    )
}