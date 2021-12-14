import { render } from '@testing-library/react';

import Alert129 from './alert129';

describe('Alert129', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert129 />);
    expect(baseElement).toBeTruthy();
  });
});
