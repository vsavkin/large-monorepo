import { render } from '@testing-library/react';

import Icon65 from './icon65';

describe('Icon65', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon65 />);
    expect(baseElement).toBeTruthy();
  });
});
