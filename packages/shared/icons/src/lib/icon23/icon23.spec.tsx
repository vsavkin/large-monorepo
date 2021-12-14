import { render } from '@testing-library/react';

import Icon23 from './icon23';

describe('Icon23', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon23 />);
    expect(baseElement).toBeTruthy();
  });
});
