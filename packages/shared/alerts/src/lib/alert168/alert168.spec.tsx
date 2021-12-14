import { render } from '@testing-library/react';

import Alert168 from './alert168';

describe('Alert168', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert168 />);
    expect(baseElement).toBeTruthy();
  });
});
