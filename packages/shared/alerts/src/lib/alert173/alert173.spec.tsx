import { render } from '@testing-library/react';

import Alert173 from './alert173';

describe('Alert173', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert173 />);
    expect(baseElement).toBeTruthy();
  });
});
