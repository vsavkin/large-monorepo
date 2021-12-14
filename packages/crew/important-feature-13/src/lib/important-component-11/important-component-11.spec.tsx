import { render } from '@testing-library/react';

import ImportantComponent11 from './important-component-11';

describe('ImportantComponent11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent11 />);
    expect(baseElement).toBeTruthy();
  });
});
