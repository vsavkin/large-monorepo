import { render } from '@testing-library/react';

import Alert107 from './alert107';

describe('Alert107', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert107 />);
    expect(baseElement).toBeTruthy();
  });
});
