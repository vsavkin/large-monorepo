import { render } from '@testing-library/react';

import ImportantComponent120 from './important-component-120';

describe('ImportantComponent120', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent120 />);
    expect(baseElement).toBeTruthy();
  });
});
