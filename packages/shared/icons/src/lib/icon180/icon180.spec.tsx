import { render } from '@testing-library/react';

import Icon180 from './icon180';

describe('Icon180', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon180 />);
    expect(baseElement).toBeTruthy();
  });
});
