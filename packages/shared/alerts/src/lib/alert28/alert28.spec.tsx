import { render } from '@testing-library/react';

import Alert28 from './alert28';

describe('Alert28', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert28 />);
    expect(baseElement).toBeTruthy();
  });
});
