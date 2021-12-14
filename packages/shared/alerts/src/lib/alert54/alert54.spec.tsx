import { render } from '@testing-library/react';

import Alert54 from './alert54';

describe('Alert54', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert54 />);
    expect(baseElement).toBeTruthy();
  });
});
