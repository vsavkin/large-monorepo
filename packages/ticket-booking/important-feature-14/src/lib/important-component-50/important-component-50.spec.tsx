import { render } from '@testing-library/react';

import ImportantComponent50 from './important-component-50';

describe('ImportantComponent50', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent50 />);
    expect(baseElement).toBeTruthy();
  });
});
