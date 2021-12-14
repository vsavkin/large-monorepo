import { render } from '@testing-library/react';

import Alert142 from './alert142';

describe('Alert142', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert142 />);
    expect(baseElement).toBeTruthy();
  });
});
