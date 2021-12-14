import { render } from '@testing-library/react';

import Alert13 from './alert13';

describe('Alert13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert13 />);
    expect(baseElement).toBeTruthy();
  });
});
