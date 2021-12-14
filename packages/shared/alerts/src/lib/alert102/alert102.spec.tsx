import { render } from '@testing-library/react';

import Alert102 from './alert102';

describe('Alert102', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert102 />);
    expect(baseElement).toBeTruthy();
  });
});
