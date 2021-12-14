import { render } from '@testing-library/react';

import Icon103 from './icon103';

describe('Icon103', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon103 />);
    expect(baseElement).toBeTruthy();
  });
});
