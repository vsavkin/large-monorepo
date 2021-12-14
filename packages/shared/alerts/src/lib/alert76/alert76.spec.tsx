import { render } from '@testing-library/react';

import Alert76 from './alert76';

describe('Alert76', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert76 />);
    expect(baseElement).toBeTruthy();
  });
});
