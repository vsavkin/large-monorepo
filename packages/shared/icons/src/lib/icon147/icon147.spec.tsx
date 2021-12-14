import { render } from '@testing-library/react';

import Icon147 from './icon147';

describe('Icon147', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon147 />);
    expect(baseElement).toBeTruthy();
  });
});
