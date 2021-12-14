import { render } from '@testing-library/react';

import ImportantComponent164 from './important-component-164';

describe('ImportantComponent164', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent164 />);
    expect(baseElement).toBeTruthy();
  });
});
