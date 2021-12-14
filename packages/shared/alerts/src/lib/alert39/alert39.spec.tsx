import { render } from '@testing-library/react';

import Alert39 from './alert39';

describe('Alert39', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert39 />);
    expect(baseElement).toBeTruthy();
  });
});
