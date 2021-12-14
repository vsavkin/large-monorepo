import { render } from '@testing-library/react';

import Icon105 from './icon105';

describe('Icon105', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon105 />);
    expect(baseElement).toBeTruthy();
  });
});
