import { render } from '@testing-library/react';

import Alert119 from './alert119';

describe('Alert119', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert119 />);
    expect(baseElement).toBeTruthy();
  });
});
