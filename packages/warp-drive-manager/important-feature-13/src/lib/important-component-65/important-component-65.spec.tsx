import { render } from '@testing-library/react';

import ImportantComponent65 from './important-component-65';

describe('ImportantComponent65', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent65 />);
    expect(baseElement).toBeTruthy();
  });
});
