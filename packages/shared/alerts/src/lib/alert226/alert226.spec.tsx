import { render } from '@testing-library/react';

import Alert226 from './alert226';

describe('Alert226', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert226 />);
    expect(baseElement).toBeTruthy();
  });
});
