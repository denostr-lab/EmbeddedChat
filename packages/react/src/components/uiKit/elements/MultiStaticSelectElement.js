// import { MultiSelectFiltered } from '@rocket.chat/fuselage';
// import React, { memo, useCallback, useMemo } from 'react';

// import { useUiKitState } from '../hooks/useUiKitState';
// import { fromTextObjectToString } from '../utils/fromTextObjectToString';

// const MultiStaticSelectElement = ({ block, context, surfaceRenderer }) => {
//   const [{ loading, value, error }, action] = useUiKitState(block, context);

//   const options = useMemo(
//     () =>
//       // eslint-disable-next-line no-shadow
//       block.options.map(({ value, text }, i) => [
//         value,
//         fromTextObjectToString(surfaceRenderer, text, i) ?? '',
//       ]),
//     [block.options, surfaceRenderer]
//   );

//   const handleChange = useCallback(
//     // eslint-disable-next-line no-shadow
//     (value) => {
//       action({ target: { value } });
//     },
//     [action]
//   );

//   return (
//     <MultiSelectFiltered
//       value={value}
//       disabled={loading}
//       error={error}
//       options={options}
//       placeholder={fromTextObjectToString(
//         surfaceRenderer,
//         block.placeholder,
//         0
//       )}
//       onChange={handleChange}
//     />
//   );
// };

// export default memo(MultiStaticSelectElement);
