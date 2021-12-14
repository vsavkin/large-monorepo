import { render } from '@testing-library/react';

import Alert184 from './alert184';

describe('Alert184', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert184 />);
    expect(baseElement).toBeTruthy();
  });
});
