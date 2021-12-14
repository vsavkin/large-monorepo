import { render } from '@testing-library/react';

import ImportantComponent32 from './important-component-32';

describe('ImportantComponent32', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent32 />);
    expect(baseElement).toBeTruthy();
  });
});
